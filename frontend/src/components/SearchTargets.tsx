import React, { useState } from "react";

function PortalCheckbox({ name, display, onSelected }: { name: string, display: string, onSelected: (target: { name: string, display: string }, selected: boolean) => void }) {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkbox = event.target;
        onSelected({ name, display }, checkbox.checked);
    }

    return (
        <div className="pl-2">
            <input type="checkbox" className="checkbox pl-4" name={name} onChange={onChange} />
            <label className="pl-2" htmlFor={name}>{display}</label>
        </div>
    );
}

export default function SearchTargets({ initialTargets, onTargetsChanged }: { initialTargets?: { name: string, display: string }[], onTargetsChanged: (targets: { name: string, display: string }[]) => void }) {
    const [targets, setTargets] = useState<{ name: string, display: string }[]>(initialTargets ?? []);
    const calculateTargetsDisplay = (targets: { name: string, display: string }[]) => {
        switch (targets.length) {
            case 0:
                return "No portals selected";
            case 1:
                return `Selected ${targets[0].display}`;
            default:
                return `Selected ${targets[0].display} + ${targets.length - 1} portals`;
        }
    };
    const targetsDisplay = calculateTargetsDisplay(targets);
    const handleExpand = (e: React.MouseEvent<HTMLElement>) => {
        const button = e.currentTarget as HTMLElement;
        const input = (button)!.firstChild as HTMLInputElement;
        input.checked = !input.checked;
    }
    const handleToggle = (target: { name: string, display: string }, selected: boolean) => {
        let newTargets = [...targets];
        if (!selected && newTargets.find((t) => t.name === target.name)) {
            newTargets = newTargets.filter((t) => t.name !== target.name);
        } else if (selected && !newTargets.includes(target)) {
            newTargets = [...newTargets, target];
        }

        setTargets(newTargets);
        onTargetsChanged(newTargets);
    }

    return (
        <div className="relative flex flex-col">
            <button type="button" className="self-end peer group btn btn-primary grow-0 gap-2" onClick={handleExpand}>
                <input type="checkbox" className="hidden" />
                <p className="font-semibold">{targetsDisplay}</p>
                <span className="not-group-has-checked:rotate-180 transition duration-300">⮝</span>
            </button>
            <div className="absolute top-[2.5rem] right-0 w-90 not-peer-has-checked:opacity-0 transition-opacity duration-300 border-2 border-black/10 bg-primary text-primary-content rounded-sm p-4">
                <p className="font-semibold text-xl">Select portals to search through:</p>
                <p className="font-bold pt-2 pl-2">General</p>
                <PortalCheckbox name="olx" display="OLX" onSelected={handleToggle} />
                <PortalCheckbox name="amazon" display="Amazon" onSelected={handleToggle} />
                <PortalCheckbox name="allegro" display="Allegro" onSelected={handleToggle} />
                <p className="font-bold pt-2 pl-2">Cars, Motorcycles & Vehicles</p>
                <PortalCheckbox name="otomoto" display="OtoMoto" onSelected={handleToggle} />
                <PortalCheckbox name="mobilede" display="Mobile.de" onSelected={handleToggle} />
                <p className="font-bold pt-2 pl-2">Properties</p>
                <PortalCheckbox name="otodom" display="OtoDom" onSelected={handleToggle} />
                <PortalCheckbox name="gratka" display="Gratka" onSelected={handleToggle} />
            </div>
        </div>
    )
}
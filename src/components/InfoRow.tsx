import type {JSX} from 'react';

interface InfoRowProps {
    // Props here
    label: string;
    value: string
}

function InfoRow({label, value}: InfoRowProps): JSX.Element {
    return (
        <>
            <span className="md:text-lg">{label}</span>
            <span className="text-primary md:text-lg">{value}</span>
        </>
    );
}

export default InfoRow;
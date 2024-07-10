

export function NavButton({displayText, callback, fontSize}: {displayText: string, callback: () => void, fontSize: string}) {

    return <>
        <h2 className="nav-button" style={{fontSize: fontSize}} onClick={callback}>{displayText}</h2>
    </>
}
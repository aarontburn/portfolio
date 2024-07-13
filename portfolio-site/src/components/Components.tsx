export const Spacer = () => {
    return <div style={{ marginRight: 'auto' }}></div>;
}


export function NavButton({ displayText, callback, fontSize, image, width }: { displayText: string, callback: () => void, fontSize: string, image?: string, width?: string }) {
    if (image === undefined) {
        return <h2 className="nav-button" style={{ fontSize: fontSize, width: width }} onClick={callback}>{displayText}</h2>
    }
    return <div onClick={callback} className="logo-nav" style={{ width: width }}>
        <img style={{ width: fontSize, height: fontSize }} src={image} alt="Logo" />
        <h2 style={{ fontSize: fontSize }}>{displayText}</h2>
    </div>
}


export function List(props: any) {
    return <>
        <li>{props.text}</li>
        <div style={{ marginLeft: '1.5em', marginBottom: '0.5em' }}>
            {props.children}
        </div>
    </>
}

export function Bold(props: any) {
    return <div style={{ fontWeight: 550 }}>
        {props.children}
    </div>
}



const LINKEDIN_URL: string = 'https://www.linkedin.com/in/aaronburnham/';
const GITHUB_URL: string = 'https://github.com/aarontburn';


export function openLink(url: string | 'LinkedIn' | 'GitHub' | undefined) {
    if (url === undefined) {
        return;
    }

    let newWindow;
    if (url === "LinkedIn") {
        newWindow = window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
    } else if (url === 'GitHub') {
        newWindow = window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
    } else {
        newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    }

    if (newWindow) {
        newWindow.opener = null
    }
}



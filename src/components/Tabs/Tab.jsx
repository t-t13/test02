export default function Tabs ({tabButton, children}){
    return (
        <>
        <menu>
            {tabButton}
        </menu>
            {children}
        </>
    )
}
export default function Tabs({ tabButton, children, Compo = 'div' }) {
    return (
        <>
            {/* Compo props is a Section component */}
            {/* <Compo>
            {tabButton}
        </Compo>
            {children} */}

            <menu>
                {tabButton}
            </menu>
            {children}
        </>
    )
}
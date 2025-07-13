export default function Layout (props) {

    const {children} = props;

    const header = ( 
        <header>
            <h1 className="text-gradient">Busy Dad Brogram</h1>
            <p><strong>30 Simple Workouts For Busy Dads</strong></p>
        </header>
    )
        
const footer = (
        <footer>
            <p>Built By <a href="https://www.hossgdev.netlify.app/"  target="_blank">HossGDev</a><br/>Styled with 
            <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>        
    )
}
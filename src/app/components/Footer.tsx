import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <span className="copyright">©{new Date().getFullYear()} Vici Online. All rights reserved.</span>
            </footer>
        </>
    )
}
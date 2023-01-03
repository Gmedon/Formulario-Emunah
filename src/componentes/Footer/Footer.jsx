import './Footer.css'
export const Footer = (Props) => {
    return (
        <footer className='footer-componets'>
            <iframe src={Props.src} frameborder="0" className='maps'></iframe>
            <p className='texto-footer'>Todos os direitos reservados.</p>
        </footer>
    )
}
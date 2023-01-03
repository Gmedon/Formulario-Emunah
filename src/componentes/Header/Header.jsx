import './Header.css'
export const Header = (Props) => {
    return (
        <header className='header-components'>
            <img src={Props.src} alt="Logo Emunah" className='logoprojeto' />
            <p><b>CADASTRO DO PROJETO EMUNAH</b></p>
        </header>
    )
}
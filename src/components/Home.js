import Logo from "./Logo/logo-no-background.png"

const Home = () => {
    const style = {
        height: "240px",
        marginLeft: '90px',
        marginTop: '10px',
        fontSize:'50px'
    }

    return (
        <div>
            <img src={Logo} alt="" style={style} />
            <h1 style={style}>By Gamers for Gamers</h1>
        </div>
    )
}
export default Home
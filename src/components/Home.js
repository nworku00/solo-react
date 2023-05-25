import Logo from "./Logo/logo-no-background.png"

const Home = () => {
    const style = {
        height: "150px",
        marginLeft: '100px',
        marginTop:'10px'
    }
    return (
        <div>
            <img src={Logo} alt="" style={style} />
        </div>
    )
}
export default Home
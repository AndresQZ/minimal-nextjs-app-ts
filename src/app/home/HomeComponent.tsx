interface HomeI {
    userId: number
}
const HomeComponent : React.FC<HomeI> = ({userId}) => {
    return (
        <section>
            <p>Welcome minimal nextJS with dd-trace</p>
            <p> user : {userId} </p>
        </section>
    )

}

export default HomeComponent;
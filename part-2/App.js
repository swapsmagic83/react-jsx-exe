const App = () =>{
    return (
        <div>
            <Tweet name="Bob" username="bob" date={new Date().toDateString()} msg="This is my tweet" />
            <Tweet name="Coco" username="coco" date={new Date().toDateString()} msg="I know its not much" />
            <Tweet name="David" username="dev" date={new Date().toDateString()} msg="But its still something" />
        </div>
    )
}
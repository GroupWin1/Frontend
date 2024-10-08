
type Args = {
    subtitle: string
}

const Header = ({subtitle}: Args) =>{
return (<header className="row mb-4">
    <div className="col-5">
        <p>this is header</p>
    </div>
    <div className="col-7 mt-5 sybtitle">{subtitle}</div>
</header>);
}

export default Header
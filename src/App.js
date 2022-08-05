import Typography from '@mui/material/Typography';
function Header() {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Craft Werks</h1>
                </div>
            </div>
        </header>
    );
}

function Form() {
    function test() {

    }
    return (
        <div>
            <form onSubmit={test}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="趣味を探そう！" />
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-dark">
                            検索
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
function Gallery() {
    const title = "タイトル";
    const tag = "tag";
    const content = "本文です";
    const index = 4;
    const post = [];
    for (let i = 0; i < index; i++) {
        post.push(<Posts title={title} tag={tag} content={content} />);
    }
    return (
        <div key={index} className="columns">
            {post}
        </div>
    );
}

function Posts(props) {
    const title = props.title;
    const tag = props.tag;
    const content = props.content;
    return (
        <div>
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">

                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{tag}</p>
                            </div>
                        </div>

                        <div className="content">
                            {content}
                            <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Main() {

    return (
        <main>
            <section className="section">
                <div className="container">
                    <Form />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Gallery />
                </div>
            </section>
        </main>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

export default App;
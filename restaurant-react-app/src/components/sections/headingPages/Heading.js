import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Food Corner</h1>
                    <p className="subsection">HOT ITALIAN PIZZA</p>
                    <br></br>
                    <Link className="action-button">Order Now</Link>
                </section>
            </article>
      </header>
    );
}
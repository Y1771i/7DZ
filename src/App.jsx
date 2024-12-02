import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import './App.css';

export default function App() {
    return (
        <>
            <section>
                <div className="info">
                    <form className='box'>
                        <Heading />
                        <Button />
                    </form>
                </div>
            </section>
        </>
    );
}


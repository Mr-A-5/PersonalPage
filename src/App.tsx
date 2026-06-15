import Main from './components/sections/Main';
import { ColorProvider } from './providers/colorProvider';
import { PlayingProvider } from './providers/playProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/sections/Projects';
import Layout from './components/sections/Layout';

function App() {
    return (
        <>
            <BrowserRouter>
                <ColorProvider>
                    <PlayingProvider>
                        <section className="overflow-x-hidden">
                            <Routes>
                                <Route element={<Layout />}>
                                    <Route path="/" element={<Main />} />
                                    <Route
                                        path="/projects"
                                        element={<Projects />}
                                    />
                                </Route>
                            </Routes>
                        </section>
                    </PlayingProvider>
                </ColorProvider>
            </BrowserRouter>
        </>
    );
}

export default App;

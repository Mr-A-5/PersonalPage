// components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import PillNav from '../organisms/NavBar';
import Github from '../../assets/images/projectImages/GitHub.png';

export default function Layout() {
    return (
        <>
            <div className="justify-items-center">
                <PillNav
                    logo={Github}
                    logoAlt="Github"
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Projects', href: '/projects' },
                    ]}
                    className="custom-nav min-w-[340px]"
                    ease="power2.easeOut"
                    baseColor="var(--color-primary)"
                    pillColor="var(--color-bg)"
                    hoveredPillTextColor="var(--color-secondary)"
                    pillTextColor="var(--color-textColor)"
                />

                <Outlet />
            </div>
        </>
    );
}

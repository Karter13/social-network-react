import React from 'react';


export function withSuspense(Component: React.ComponentType<any>) {
    return (props: any) => {
        return  <React.Suspense fallback={<div>Loading...</div>}>
            <Component{...props}/>
        </React.Suspense>
    };
}

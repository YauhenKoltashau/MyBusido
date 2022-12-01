import React, {ComponentType, Suspense} from 'react'

export function withlazyLoading<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>
    }
}
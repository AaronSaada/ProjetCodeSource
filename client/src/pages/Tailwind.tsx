import { Page } from "../components/Page/Page"

export const Tailwind = () => {
    return (
        <Page title="Tailwind">
            <div className="border-">
                <div>
                    <span>Username : </span>
                    <input 
                        type="text" 
                    />
                </div>
                <div>
                    <span>Password : </span>
                    <input 
                        type="password" 
                    />
                </div>
            </div>
        </Page>
    )
}

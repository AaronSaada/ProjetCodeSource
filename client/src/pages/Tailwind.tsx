import { Page } from "../components/Page/Page"

export const Tailwind = () => {
    return (
        <Page title="Tailwind">
            <div className="border-1 border-black rounded-2xl p-4">
                <div className="flex gap-4">
                    <label className="input">
                    <input 
                        type="text" 
                        className="grow"
                    />
                    </label>
                </div>
                <div className="flex gap-4">
                    <span>Password : </span>
                    <input 
                        type="password" 
                    />
                </div>
            </div>
        </Page>
    )
}

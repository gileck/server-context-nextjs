import createServerContext from "@/app/ServerContext";

export const AppContext = createServerContext({someOtherValue: 'default value'})
export const useContext = () => AppContext.useContext()
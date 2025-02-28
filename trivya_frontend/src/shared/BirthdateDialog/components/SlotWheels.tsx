import { FC, ReactNode } from "react"

const SlotWheels: FC<{ children: ReactNode }> = ({ children }) => <div className="FLEX-CENTER tablet:gap-4 mobileL:gap-2 gap-1">{children}</div>

export default SlotWheels

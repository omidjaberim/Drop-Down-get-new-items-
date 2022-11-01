import { useCallback, useState } from "react"

const useSelect = () => {
    const [isOpen, setisOpen] = useState<boolean>(false);
    const [options,setOptions] = useState<string[]>(["initial"])
    const [txtValue,setTxtValue] = useState<string>("")

    const handleChange = (value : string) => {
        setTxtValue(value)
    }
    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setisOpen(!isOpen);        
      },[])
    const handleClose = () => {
          setisOpen(false);
      };
    const handleItemClick = useCallback((item: string) => {
        setTxtValue(item)
        handleClose()
    },[])
    const handleEnter = () => {
        if (!options.includes(txtValue)) {
            setOptions(prev => [...prev, txtValue])
            setTxtValue("")
        }
    }
    return {
        isOpen,
        handleClick,
        options,
        handleClose,
        handleItemClick,
        handleChange,
        txtValue,
        handleEnter
    }
}

export default useSelect

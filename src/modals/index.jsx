
import modals from "../routes/modals";
import {useModal} from "../store/modal/hooks";
export default function Modal(){
    const modal = useModal()
    const currentModal = modals.find(m => m.name === modal.name)
    function hidden(){
        document.body.style.overflow='hidden'
    }
    return(
        
        <div className="fixed inset-0 bg-[#5b708366] flex items-center justify-center z-30">
            {hidden()}
            {currentModal &&(
                <currentModal.element/>
       
            )}

        </div>
    )
}
import {TASK_KEY} from "./Constants"

function StorageTasks() {

    let tasksArr = []

    const getData = () => {

        const data = localStorage.getItem(TASK_KEY)
        return JSON.parse(data)
    
    }
    const getDataLength = () => {
        
        const storage = getData()
        return ( storage ) ? storage.length : 0
        
    }    
    const updateArray = () => {
 
        const storedArr = getData(TASK_KEY)
        if ( storedArr ) {
            tasksArr = storedArr
        } 

    }
    const updateData = (dataObj) => {
        // updateArray()
        tasksArr.push(dataObj)
        localStorage.setItem( TASK_KEY, JSON.stringify(tasksArr) )
    
    }
    const getArray = (projectid) => {
        updateArray()

        const specifictasks = tasksArr.filter(task => task.projectid == projectid)
        return specifictasks 
    }
    

    return {getDataLength, updateData, getArray }
    
}
export default StorageTasks
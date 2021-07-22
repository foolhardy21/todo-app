import {STORAGE_KEY} from "../Constants"

function StorageProjects() {

    let projectsArr = []

    const getData = () => {

        const data = localStorage.getItem(STORAGE_KEY)
        return JSON.parse(data)
    
    }
    const getDataLength = () => {
        
        const storage = getData()
        return ( storage ) ? storage.length : 0
        
    }    
    const updateArray = () => {
 
        const storedArr = getData(STORAGE_KEY)
        if ( storedArr ) {
            projectsArr = storedArr
        } 

    }
    const updateData = (dataObj,op) => {
        if(op == 'add') {
            projectsArr.push(dataObj)
        }
        else if(op == 'del') {
            projectsArr = projectsArr.filter( item => item.id != dataObj.id )
        }
        
        localStorage.setItem( STORAGE_KEY, JSON.stringify(projectsArr) )
    
    }
    const getArray = () => {
        updateArray()
        return projectsArr 
    }
    

    return {getDataLength, updateData, getArray }
    
}
export default StorageProjects
import axios from "axios";

async function getProfileData() {
        let data;
        await axios.get(`https://api.github.com/users/m7md0a`)
        .then(res => {
            data = res.data
        });
        return data
}

// async function getAbout() {
//         let data;
//         await axios.get(`https://api.github.com/repos/m7md0a/mohamed/contents/data.json`, {
//         'headers': {
//             'Authorization': `token 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`
//         }
//         }).then(res => {
//             data = JSON.parse(atob(res.data.content))
//         });
//         return data
// }

async function getProjects() {
    let data;
    await axios.get('https://api.github.com/users/m7md0a/repos').then(res => {
        data = res.data.filter(e => e.sortM = e.updated_at.replace(/T|-|:|Z/gi,'')).sort((a,b) => a.sortM - b.sortM).reverse()
    });
    return data
}

async function getOneProject(projectName) {
    let data;
    await axios.get(`https://api.github.com/repos/m7md0a/${projectName}`)
    .then(res => {
        data = res.data
    });
    return data
}


async function getReadme(projectName) {
    try {
        let data;
        await axios.get(`https://raw.githubusercontent.com/m7md0a/${projectName}/main/details.html`)
        .then(res => {
            data = res.data
        });
        return data
    }
    catch (e){
        return false
    }
}

export {getProfileData, getProjects, getOneProject, getReadme};
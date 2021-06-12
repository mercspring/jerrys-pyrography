import axios from 'axios';

function checkForToken(){

   

}

const imageUtils = {
    upload: async function (file) {
        const formData = new FormData();
        formData.append('file', file);
        // replace this with your upload preset name
        formData.append('upload_preset', 'iixgytev');
        // const options = {
        //     method: 'POST',
        //     body: formData,
        // };
        const result = await axios.post('https://api.Cloudinary.com/v1_1/mercspring/image/upload', formData);
        return result
            

    },

    newImage: async function(data, token){
        const result = await axios.post('/api/new', data, { headers: { Authorization : `Bearer ${token}`}});
        return result
    },

    getImages: async function(){
        const result = await axios.get ('/api/art');
        return result
    },
    editImage: async function(data, token){
        const result = await axios.put('/api/edit', data, { headers: { Authorization : `Bearer ${token}`}});
        return result
    }, 
    deleteImage: async function(id, token){
        const result = await axios.delete('/api/art/' + id, {}, { headers: { Authorization : `Bearer ${token}`}});
        return result
    },
    getAbout: async function(id){
        const result = await axios.get('/api/about')
        return result
    }, 
    updateAbout: async function(data, token){
       console.log(data) 
        const result = await axios.put('/api/about', data, { headers: { Authorization : `Bearer ${token}`}})
        return result
    },
    updateContact: async function(data, token){
        const result = await axios.put('/api/contact', data, { headers: { Authorization : `Bearer ${token}`}})
        return result
    },
    getContact: async function(id){
        const result = await axios.get('/api/contact')
        return result
    },
    signin: async function(signinInfo){
        const result = await axios.post('/signin', signinInfo)
        return result
    },
    setPassword: async function(newPassword){
        const result = await axios.post('/api/password', {password: newPassword})
        return result
    },
    sendEmail: async function(emailInfo){
        const result = await axios.post('/contact', emailInfo);
        return result
    } 

}

export default imageUtils;
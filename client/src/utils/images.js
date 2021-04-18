import axios from 'axios';

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

    newImage: async function(data){
        const result = await axios.post('/api/new', data);
        return result
    },

    getImages: async function(){
        const result = await axios.get ('/api/art');
        return result
    },
    editImage: async function(data){
        const result = await axios.put('/api/edit', data);
        return result
    }, 
    deleteImage: async function(id){
        const result = await axios.delete('/api/art/' + id);
        return result
    },
    getAbout: async function(id){
        const result = await axios.get('/api/about')
        return result
    }, 
    updateAbout: async function(data){
       console.log(data) 
        const result = await axios.put('/api/about', data)
        return result
    },
    updateContact: async function(data){
        const result = await axios.put('/api/contact', data)
        return result
    },
    getContact: async function(id){
        const result = await axios.get('/api/contact')
        return result
    }, 

}

export default imageUtils;
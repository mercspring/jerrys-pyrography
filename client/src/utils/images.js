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
        axios.post('/api/new', data);
    }

}

export default imageUtils;
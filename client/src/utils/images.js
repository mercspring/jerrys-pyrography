import axios from 'axios';

const imageUtils = {
    upload: function (file) {
        const formData = new FormData();
        formData.append('file', file);
        // replace this with your upload preset name
        formData.append('upload_preset', 'iixgytev');
        // const options = {
        //     method: 'POST',
        //     body: formData,
        // };
        axios.post('https://api.Cloudinary.com/v1_1/mercspring/image/upload', formData).then((result) => {
            console.log(result)
        })

    }

}

export default imageUtils;
function toggleContent(type) {
    if (type === 'Generate') {
        document.getElementById('Generate_content').style.display = 'block';
        document.getElementById('Upload_content').style.display = 'none';
    } else if (type === 'Upload') {
        document.getElementById('Generate_content').style.display = 'none';
        document.getElementById('Upload_content').style.display = 'block';
    }
}
document.getElementById('generateFile').addEventListener('click', function() {
    const fileSize = document.getElementById('fileSize').value;
    const messageDiv = document.getElementById('message');
    const downloadLink = document.getElementById('downloadLink');

    // Clear previous messages and download link
    messageDiv.textContent = '';
    downloadLink.style.display = 'none';

    // Validate the file size input
    if (!fileSize || fileSize < 1 || fileSize > 102400) {
        messageDiv.textContent = 'Please enter a file size between 1 MB and 100,000 MB.';
        return;
    }

    // Convert MB to bytes
    const fileSizeBytes = fileSize * 1024 * 1024;

    // Generate the file content (filled with null characters or any other character)
    const fileContent = new Uint8Array(fileSizeBytes);
    const blob = new Blob([fileContent], { type: 'application/octet-stream' });

    // Create a download link
    const fileName = `test_file_${fileSize}MB.bin`;
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.textContent = `Download ${fileName}`;
    downloadLink.style.display = 'block';
});

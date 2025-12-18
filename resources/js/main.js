
// main.js
Neutralino.init();

async function scanAndSort() {
    try {
        // 1. Open the folder picker
        let selectedPath = await Neutralino.os.showFolderDialog('Select folder to organize');
        
        // 2. Stop if user cancels
        if (!selectedPath) return;

        // 3. Get all files in that folder
        let entries = await Neutralino.filesystem.readDirectory(selectedPath);
        
        for (let item of entries) {
            if (item.type === 'FILE') {
                let extension = item.entry.split('.').pop().toLowerCase();
                let folderName = 'Others';

                // Categorize by extension
                if (['png', 'jpg', 'jpeg', 'gif'].includes(extension)) {
                    folderName = 'Images';
                } else if (extension === 'pdf') {
                    folderName = 'Documents';
                }

                let targetDir = `${selectedPath}/${folderName}`;

                // Create the sub-folder if it doesn't exist
                try {
                    await Neutralino.filesystem.createDirectory(targetDir);
                } catch (e) {
                    // Folder already exists, just keep going
                }

                let source = `${selectedPath}/${item.entry}`;
                let destination = `${targetDir}/${item.entry}`;

                // Move the file into the new folder
                await Neutralino.filesystem.move(source, destination);
            }
        }
        
        await Neutralino.os.showMessageBox('Success', 'Files have been organized!');
    } catch (err) {
        console.error("Critical Error:", err);
    }
}
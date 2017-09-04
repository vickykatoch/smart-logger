var fs = require('fs');

export class LogFileWriter {
    private stream;
    constructor() {
        this.stream = fs.createWriteStream("my_file.txt");
        this.stream.once('open', function (fd) {
            this.stream.write("My first row\n");
            this.stream.write("My second row\n");
            // this.stream.end();
        });
    }

    writeMessage(message: any) {
        this.stream.write(message);
    }
}
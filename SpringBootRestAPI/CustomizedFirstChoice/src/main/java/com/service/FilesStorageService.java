package com.service;

import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface FilesStorageService {
    void init();

    void save(MultipartFile file) throws FileUploadException;

    Resource load(String filename);

    void deleteAll();

    void delete(String fileName);

    Stream<Path> loadAll();
}

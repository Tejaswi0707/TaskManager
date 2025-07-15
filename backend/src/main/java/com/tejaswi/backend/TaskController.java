package com.tejaswi.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskRespository repo;
    public TaskController(TaskRespository repo){
        this.repo=repo;
    }

    @GetMapping
    public List<Task> getAllTasks(){
        return repo.findAll();
    }
    @PostMapping
    public Task addTask(@RequestBody Task task){
        return repo.save(task);
    }
}

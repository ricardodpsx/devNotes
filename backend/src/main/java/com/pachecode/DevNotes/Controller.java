package com.pachecode.DevNotes;

/**
 * Created by ricardo.pacheco on 8/14/17.
 */
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/api/note")
    public List<Note> notes() {
        return new User().getMyNotes();
    }

    @RequestMapping(value = "/api/note", method = RequestMethod.POST)
    public Note saveNote(@RequestBody Note note) {
        return new User().addNote(note);
    }
}

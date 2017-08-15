package com.pachecode.DevNotes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by ricardo.pacheco on 8/14/17.
 */
public class User {
    static List<Note> notes = new ArrayList<Note>();

    static {
        notes.addAll(Arrays.asList(
                new Note(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non justo eu nisi fringilla varius. Cras sit amet est massa. Vestibulum blandit et diam a fermentum."),
                new Note(2, "Duis bibendum a dolor ac elementum. In eleifend interdum nisl luctus varius. Donec feugiat ultricies iaculis. Morbi sodales ultrices mauris eget volutpat."),
                new Note(3, "Proin malesuada dui nec odio consectetur, in accumsan augue commodo. Integer vitae gravida velit. In lorem nibh, auctor eu odio sit amet, efficitur feugiat libero."),
                new Note(4, "Mauris vestibulum sapien justo, a finibus nisi fringilla quis. Ut ultricies ante vel leo fringilla finibus. In in velit vulputate, tincidunt odio sed, porta lacus. Etiam orci lorem, efficitur at venenatis quis, tincidunt et tellus.")
        ));
    }

    public List<Note> getMyNotes() {
        return notes;
    }

    public Note addNote(Note n) {
        n.setId(notes.size() + 1);
        notes.add(n);
        return n;
    }
}

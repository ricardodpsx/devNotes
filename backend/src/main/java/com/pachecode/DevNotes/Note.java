package com.pachecode.DevNotes;

/**
 * Created by ricardo.pacheco on 8/14/17.
 */
public class Note {

    private int id;
    private String text;

    public Note() {

    }

    public Note(int id, String text) {
        this.id = id;
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }
}

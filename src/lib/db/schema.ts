//pg stands for postgres this contains postgres utilities
import {
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
  } from "drizzle-orm/pg-core";

/* What is use of ENUM in SQL?
 What is SQL ENUM? - Scaler Topics
 In SQL, the ENUM data type is a string object that allows us to limit the entries in a particular column by permitting only the String values specified for that column during the table creation. ENUM is the short form for the term “Enumeration”. */
 /*this is going to be the mapped within the database itself.
 for if user or system we need to create an enum for that 
 if the role is is a system that this message is being sent by GPT and if the row here is user message
 so we can just make this type more type safe by creating a type within it
 so for this row, you'll just be user system enum
 
 */
export const userSystemEnum = pgEnum('user_system_enum', ['system', 'user']);


// we use fileKey to actually ID of the file within the S3 bucket
export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfName: text('pdf_name').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id', {length: 256}).notNull(),
    fileKey: text('file_key').notNull()

});

//chatId is to perform the one to many relations, the integer so this is from pgcore itself
// the reference function is taking the callback function and it just returns the chat's ID. 
// if the row is user or system aka ai 
export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    chatId: integer('chat_id').reference(() => chats.id).notNull(),
    content: ('content').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    role: userSystemEnum('role').notNull()
})
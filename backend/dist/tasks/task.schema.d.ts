import { Document } from 'mongoose';
export type TaskDocument = Task & Document;
export declare enum Priority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export declare enum Status {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done"
}
export declare class Task {
    title: string;
    description: string;
    completed: boolean;
    priority: Priority;
    dueDate: Date;
    status: Status;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, (Document<unknown, any, Task, any, import("mongoose").DefaultSchemaOptions> & Task & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Task, any, import("mongoose").DefaultSchemaOptions> & Task & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Task>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, Task, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    completed?: import("mongoose").SchemaDefinitionProperty<boolean, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priority?: import("mongoose").SchemaDefinitionProperty<Priority, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dueDate?: import("mongoose").SchemaDefinitionProperty<Date, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<Status, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Task>;

import { database } from "./database.js";
import { randomUUID } from 'node:crypto';
import { buildRoutePath } from "../src/utils/build-route-path.js";

const db = new database();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { search } = req.query;
            const users = db.select('users', search ? {
                name: search,
                email: search
            } : null);

            return res.end(JSON.stringify(users));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { name, email } = req.body;
            const user = { id: randomUUID(), name, email };
            db.insert('users', user);
            return res.writeHead(201).end();
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const { id } = req.params;
            const wasDeleted = db.delete('users', id);

            if (wasDeleted) {
                return res.writeHead(204).end();
            }
            return res.writeHead(404).end();
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const { id } = req.params;
            const { name, email } = req.body;

            if (!name && !email) {
                return res.writeHead(400).end(
                    JSON.stringify({ message: 'name or email are required' })
                );
            }

            const updatedData = {};
            if (name) updatedData.name = name;
            if (email) updatedData.email = email;

            const wasUpdated = db.update('users', id, updatedData);

            if (wasUpdated) {
                return res.writeHead(204).end();
            }

            return res.writeHead(404).end();
        }
    }
]

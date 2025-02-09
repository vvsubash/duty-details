import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$onUpdate(() => new Date()),
})

export const guards = sqliteTable('guards', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$onUpdate(() => new Date()),
})
export const guardRelations = relations(guards, ({ many }) => ({
  duties: many(duties),
}))
export const points = sqliteTable('points', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$onUpdate(() => new Date()),
})
export const pointRelations = relations(points, ({ many }) => ({
  duties: many(duties),
}))
export const duties = sqliteTable('duties', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  guardId: integer('guard_id').references(() => guards.id),
  pointId: integer('point_id').references(() => points.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$onUpdate(() => new Date()),
})
export const dutyRelations = relations(duties, ({ one }) => ({
  guard: one(guards, {
    fields: [duties.guardId],
    references: [guards.id],
  }),
  point: one(points, {
    fields: [duties.pointId],
    references: [points.id],
  }),
}))


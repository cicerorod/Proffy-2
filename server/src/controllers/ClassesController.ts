import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface SheduleItem {
  week_day: string;
  from: string;
  to: string;
}

export default class ClassesController {
  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    const transaction = await db.transaction();

    try {
      const insertedUsersIds = await transaction('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      });

      const user_id = insertedUsersIds[ 0 ];

      const insertedClassesIds = await transaction('classes').insert({
        user_id,
        subject,
        cost
      });

      const class_id = insertedClassesIds[ 0 ];

      const classSchedule = schedule.map((item: SheduleItem) => {
        return {
          class_id,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to)
        };
      });

      await transaction('class_schedule').insert(classSchedule);

      await transaction.commit();

      return response.status(201).send();
    }
    catch(error) {
      transaction.rollback();
      return response.status(400).json({
        'message': 'Unexpected error',
        'error': error
      });
    }
  }
}
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });
      
      return res.json(settings);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

    const settings = await settingsService.create({ chat, username });

    return res.json(settings);
  }
}

export { SettingsController };

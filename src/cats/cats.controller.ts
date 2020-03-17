import { Controller, Get, Post, Redirect, Query, Param, Body, ForbiddenException } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<any[]> {
    throw new ForbiddenException();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action return #${id} a cats`;
  }

  @Get('docs')
  @Redirect('https:docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}

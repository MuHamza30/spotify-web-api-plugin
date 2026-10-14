from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_object import ErrorObject, ErrorObjectDict


class BadRequest(SdkBaseModel):
    error: ErrorObject


class BadRequestDict(TypedDict):
    error: ErrorObjectDict

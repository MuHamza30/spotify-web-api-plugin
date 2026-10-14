from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_object import ErrorObject, ErrorObjectDict


class Forbidden(SdkBaseModel):
    error: ErrorObject


class ForbiddenDict(TypedDict):
    error: ErrorObjectDict
